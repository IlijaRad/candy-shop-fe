import OtpForm from "@/ui/components/otp-form";

export default function Page() {
  return (
    <div className="bg-white px-4 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-129.5 rounded-xl border-gray-200 bg-white lg:border lg:p-8">
        <h1 className="mt-4 w-fit text-2xl font-semibold text-gray-900">
          Potvrdi svoju email adresu
        </h1>
        <p className="mt-4 flex flex-wrap text-gray-700">
          Poslali smo kod na&nbsp;
          <span className="block truncate font-medium">example@gmail.com</span>
        </p>
        <p className="mt-4 font-medium text-gray-700">Unesi kod</p>
        <OtpForm />
      </div>
    </div>
  );
}
