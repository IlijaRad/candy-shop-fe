type NutritionalTableProps = {
  energy?: string | null;
  fat?: string | null;
  saturates?: string | null;
  carbohydrate?: string | null;
  sugars?: string | null;
  fibre?: string | null;
  protein?: string | null;
  salt?: string | null;
};

export default function NutritionalTable({
  energy,
  fat,
  saturates,
  carbohydrate,
  sugars,
  fibre,
  protein,
  salt,
}: NutritionalTableProps) {
  const renderValue = (value?: string | null) => value || "--";

  return (
    <div className="mt-8 w-full overflow-x-auto rounded-lg border border-black/10 bg-white">
      <table className="w-full border-collapse">
        <tbody className="divide-y divide-black/10 *:even:bg-pink-50">
          <tr>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900">
              Energy
            </td>
            <td className="px-6 py-4 text-right text-sm font-medium text-gray-700">
              {renderValue(energy)}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900">
              Fat
            </td>
            <td className="px-6 py-4 text-right text-sm font-medium text-gray-700">
              {renderValue(fat)}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 pl-12 text-sm font-medium text-gray-600">
              of which saturates
            </td>
            <td className="px-6 py-4 text-right text-sm font-medium text-gray-700">
              {renderValue(saturates)}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900">
              Carbohydrate
            </td>
            <td className="px-6 py-4 text-right text-sm font-medium text-gray-700">
              {renderValue(carbohydrate)}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 pl-12 text-sm font-medium text-gray-600">
              of which sugars
            </td>
            <td className="px-6 py-4 text-right text-sm font-medium text-gray-700">
              {renderValue(sugars)}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900">
              Fibre
            </td>
            <td className="px-6 py-4 text-right text-sm font-medium text-gray-700">
              {renderValue(fibre)}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900">
              Protein
            </td>
            <td className="px-6 py-4 text-right text-sm font-medium text-gray-700">
              {renderValue(protein)}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900">
              Salt
            </td>
            <td className="px-6 py-4 text-right text-sm font-medium text-gray-700">
              {renderValue(salt)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
