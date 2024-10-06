import RealEstateObject from "../interfaces/RealEstateObject";
import FilterDropdown from "./FilterDropdown";

const filters = [
  {
    label: "Продаж/Аренда",
    defaultValue: "Усі типи",
    type: "type",
    subType: "",
  },
  {
    label: "Категорії нерухомості",
    defaultValue: "Усі Категорії",
    type: "category",
    subType: "",
  },
  {
    label: "Райони",
    defaultValue: "Усі Райони",
    type: "location",
    subType: "sub-locality-name",
  },
  {
    label: "Комнат",
    defaultValue: "Усі Комнат",
    type: "rooms",
    subType: "",
  },
  {
    label: "Агенти",
    defaultValue: "Усі Агенти",
    type: "sales-agent",
    subType: "name",
  },
];

export default function FiltersDropdown({
  realEstateData,
}: {
  realEstateData: RealEstateObject[];
}) {
  return (
    <>
      {filters.map((val) => {
        return (
          <FilterDropdown
            label={val.label}
            currentObjects={realEstateData}
            defaultValue={val.defaultValue}
            type={val.type}
            subType={val.subType}
          />
        );
      })}
    </>
  );
}
