import {
  Box,
  Divider,
  Paper,
  TextInput,
  Select,
  Button,
  FileInput,
  Flex,
} from "@mantine/core";
import type { SubmitHandler } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  IconAsterisk,
  IconEPassport,
  IconFileCertificate,
  IconReport,
} from "@tabler/icons-react";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

const schema = z.object({
  firstName: z.string().min(1, { message: "This field is required." }),
  fatherName: z.string().min(1, { message: "This field is required." }),
  lastName: z.string().min(1, { message: "This field is required." }),
  phone: z.string().min(1, { message: "This field is required." }),
  email: z.string().optional().default("none"),
  visaType: z.string().min(1, { message: "This field is required." }),
  country: z.string().min(1, { message: "This field is required." }),
  study: z.string().optional().default("none"),
});

type FormSchema = z.infer<typeof schema>;

export default function ApplyForm() {
  const [fileUrl, setFileUrl] = useState<Record<string, string | undefined>>();
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
  } = useForm<FormSchema>({ resolver: zodResolver(schema) });

  const sendEmail = api.email.sendMail.useMutation({
    onSuccess: () => {
      setLoading(false)
      reset()
      notifications.show({
        title: "Success",
        message: "Form submitted successfully",
        color: "green",
        icon: <IconReport />,
      })
      router.push("/thankyou")
    },
    onError: () => {
      setLoading(false)
      notifications.show({
        title: "Error",
        message: "Form submission failed",
        color: "red",
        icon: <IconReport />,
      })
    }
  });

  const handleSendMail = (message: Record<string, string>) => {
    sendEmail.mutate({ message: message });
  };

  const onSubmit: SubmitHandler<FormSchema> = async (data: FormSchema) => {
    setLoading(true)
    handleSendMail({ ...data, ...fileUrl });
  };

  const studyDestinations = [
    "Italy",
    "Canda",
    "Austria",
    "Russia",
    "Netherlands",
  ];
  const workDestinations = ["Poland", "Romania", "Czech Republic", "Russia"];
  const allDestinations = [
    "Italy",
    "Canda",
    "Austria",
    "Russia",
    "Netherlands",
    "Poland",
    "Romania",
    "Czech Republic",
  ];

  const preferredVisa = watch("visaType");
  const study = watch("study");

  return (
    <Paper withBorder className="w-full rounded-sm p-8 md:mr-6 ">
      <p className="text-semibold text-lg">
        Please fill the below form to start application!
      </p>
      <Divider label="Personal Information" labelPosition="center" my={20} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="flex flex-col gap-4 md:flex-row ">
          <TextInput
            label="First Name"
            className="md:w-1/3"
            withAsterisk
            {...register("firstName")}
            error={errors.firstName?.message}
          />
          <TextInput
            label="Father's Name"
            className="md:w-1/3"
            withAsterisk
            {...register("fatherName")}
            error={errors.fatherName?.message}
          />
          <TextInput
            label="Last Name"
            className="md:w-1/3"
            withAsterisk
            {...register("lastName")}
            error={errors.lastName?.message}
          />
        </Box>
        <Box className="flex gap-4 flex-col md:flex-row">
          <TextInput
            label="Email Address"
            className="md:w-1/2"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <TextInput
            label="Phone Number"
            className="md:w-1/2"
            withAsterisk
            {...register("phone")}
            error={errors.phone?.message}
          />
        </Box>
        <Divider label="Visa Preference" labelPosition="center" my={20} />
        <Box className="flex flex-col md:flex-row gap-4">
          <Controller
            control={control}
            name="visaType"
            render={({ field: { value, name, onChange } }) => (
              <Select
                error={errors.visaType?.message}
                name={name}
                nothingFoundMessage="No options"
                onChange={onChange}
                placeholder="Select your preferred visa type"
                value={value}
                label="Visa You are applying for:"
                data={[
                  "Study Visa",
                  "Work Visa",
                  "Medical Visa",
                  "Tourist Visa",
                ]}
                className="md:w-1/2"
                withAsterisk
              />
            )}
          />
          <Controller
            control={control}
            name="country"
            render={({ field: { value, name, onChange } }) => (
              <Select
                error={errors.visaType?.message}
                name={name}
                nothingFoundMessage="No options"
                onChange={onChange}
                placeholder="Country of interest"
                searchable
                value={value}
                label="Country of interest"
                data={
                  !preferredVisa
                    ? allDestinations
                    : preferredVisa === "Study Visa"
                      ? studyDestinations
                      : workDestinations
                }
                className="md:w-1/2"
                withAsterisk
              />
            )}
          />
          {preferredVisa === "Study Visa" && (
            <Controller
              control={control}
              name="study"
              render={({ field: { value, name, onChange } }) => (
                <Select
                  error={errors.visaType?.message}
                  name={name}
                  nothingFoundMessage="No options"
                  onChange={onChange}
                  placeholder="Preferred level of study"
                  value={value}
                  label="Level of study"
                  data={["Bachelors", "Masters", "Phd"]}
                  className="md:w-1/2"
                  withAsterisk
                  required
                />
              )}
            />
          )}
        </Box>
        <Divider label="Supporting Documents" labelPosition="center" my={20} />
        <Box className="flex flex-col flex-wrap sm:flex-row md:gap-12">
          <Box className="flex flex-col">
            <Flex className="items-center gap-1">
              <p>Passport</p>
              <IconAsterisk size={12} color="red" />
            </Flex>
            <UploadDropzone
              endpoint="fileUploader"
              onClientUploadComplete={(res) => {
                setFileUrl((prevFileUrl) => ({
                  ...prevFileUrl,
                  passport: res[0]?.serverData,
                }));
                notifications.show({
                  title: "Success",
                  message: "Passport uploaded successfully",
                  color: "green",
                });
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                notifications.show({
                  title: "Error",
                  message: error.message,
                  color: "red",
                });
              }}
              className="self-start"
            />
          </Box>
          <Box className="flex flex-col">
            <Flex className="items-center gap-1">
              <p>Photo</p>
              <IconAsterisk size={12} color="red" />
            </Flex>
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setFileUrl((prevFileUrl) => ({
                  ...prevFileUrl,
                  photo: res[0]?.serverData,
                }));
                notifications.show({
                  title: "Success",
                  message: "Photo uploaded successfully",
                  color: "green",
                });
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                notifications.show({
                  title: "Error",
                  message: error.message,
                  color: "red",
                });
              }}
              className="self-start"
            />
          </Box>
          {preferredVisa === "Work Visa" && (
            <Box className="flex w-1/2 flex-col">
              <p>CV</p>
              <UploadDropzone
                endpoint="fileUploader"
                onClientUploadComplete={(res) => {
                  setFileUrl((prevFileUrl) => ({
                    ...prevFileUrl,
                    cv: res[0]?.serverData,
                  }));
                  notifications.show({
                    title: "Success",
                    message: "CV uploaded successfully",
                    color: "green",
                  });
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  notifications.show({
                    title: "Error",
                    message: error.message,
                    color: "red",
                  });
                }}
                className="self-start ut-button:bg-secondary-700"
              />
            </Box>
          )}
          {preferredVisa === "Tourist Visa" && (
            <Box className="flex w-1/2 flex-col">
              <p>Travel History</p>
              <UploadDropzone
                endpoint="fileUploader"
                onClientUploadComplete={(res) => {
                  setFileUrl((prevFileUrl) => ({
                    ...prevFileUrl,
                    travel: res[0]?.serverData,
                  }));
                  notifications.show({
                    title: "Success",
                    message: "Travel History uploaded successfully",
                    color: "green",
                  });
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  notifications.show({
                    title: "Error",
                    message: error.message,
                    color: "red",
                  });
                }}
                className="self-start ut-button:bg-secondary-700"
              />
            </Box>
          )}
          {preferredVisa === "Medical Visa" && (
            <Box className="flex w-1/2 flex-col">
              <p>Medical Certificate</p>
              <UploadDropzone
                endpoint="fileUploader"
                onClientUploadComplete={(res) => {
                  setFileUrl((prevFileUrl) => ({
                    ...prevFileUrl,
                    medical: res[0]?.serverData,
                  }));
                  notifications.show({
                    title: "Success",
                    message: "Medical Certificate uploaded successfully",
                    color: "green",
                  });
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  notifications.show({
                    title: "Error",
                    message: error.message,
                    color: "red",
                  });
                }}
                className="self-start ut-button:bg-secondary-700"
              />
            </Box>
          )}
          {preferredVisa === "Study Visa" && (
            <>
              <Box className="flex flex-col">
                {study === "Bachelors" ? (
                  <p>High School Transcript</p>
                ) : (
                  <p>Student Copy</p>
                )}
                <UploadDropzone
                  endpoint="fileUploader"
                  onClientUploadComplete={(res) => {
                    setFileUrl((prevFileUrl) => ({
                      ...prevFileUrl,
                      education: res[0]?.serverData,
                    }));
                    notifications.show({
                      title: "Success",
                      message: "Transcript uploaded successfully",
                      color: "green",
                    });
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    notifications.show({
                      title: "Error",
                      message: error.message,
                      color: "red",
                    });
                  }}
                  className="self-start ut-button:bg-secondary-700"
                />
              </Box>
              <Box className="flex flex-col">
                <p>Others (Recommendation)</p>
                <UploadDropzone
                  endpoint="fileUploader"
                  onClientUploadComplete={(res) => {
                    setFileUrl((prevFileUrl) => ({
                      ...prevFileUrl,
                      recommendation: res[0]?.serverData,
                    }));
                    notifications.show({
                      title: "Success",
                      message: "Recommendation uploaded successfully",
                      color: "green",
                    });
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    notifications.show({
                      title: "Error",
                      message: error.message,
                      color: "red",
                    });
                  }}
                  className="self-start ut-button:bg-secondary-700"
                />
              </Box>
            </>
          )}
        </Box>
        <Box className="flex">
          <Button className="mt-6 ml-auto bg-primary-600" type="submit" loading={loading}>
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
