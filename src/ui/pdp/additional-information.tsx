type AdditionalInfoProps = {
  ingredients: string | null;
  allergens: string | null;
  country_of_origin: string | null;
};

export default function AdditionalInformation({
  ingredients,
  allergens,
  country_of_origin,
}: AdditionalInfoProps) {
  return (
    <div className="mt-8 w-full space-y-6">
      {ingredients ? (
        <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
          <div className="border-b border-black/10 bg-blue-50 px-6 py-4">
            <h3 className="text-lg font-semibold text-blue-900">Sastojci</h3>
          </div>
          <div className="flex flex-col gap-y-2.5 px-6 py-5">
            {ingredients.split(",").map((char, i) => (
              <div key={i} className="flex items-center gap-x-3">
                <div className="size-2 rounded-full bg-blue-600"></div>
                <p className="text-sm font-medium text-gray-700 first-letter:uppercase">
                  {char}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {allergens ? (
        <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
          <div className="border-b border-black/10 bg-yellow-50 px-6 py-4">
            <h3 className="text-lg font-semibold text-yellow-900">Alergeni</h3>
          </div>

          <div className="flex flex-col gap-y-2.5 px-6 py-5">
            {allergens.split(",").map((char, i) => (
              <div key={i} className="flex items-center gap-x-3">
                <div className="size-2 rounded-full bg-amber-600"></div>
                <p className="text-sm font-medium text-gray-700">{char}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {country_of_origin ? (
        <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
          <div className="border-b border-black/10 bg-green-50 px-6 py-4">
            <h3 className="text-lg font-semibold text-green-900">
              Zemlja porekla
            </h3>
          </div>
          <div className="flex items-center gap-x-3 px-6 py-5">
            <div className="size-2 rounded-full bg-green-600"></div>
            <p className="text-sm font-medium text-gray-900">
              {country_of_origin}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
