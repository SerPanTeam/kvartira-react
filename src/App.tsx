import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import RealEstateObject from "./interfaces/RealEstateObject";
import PropertiesList from "./components/PropertiesList/PropertiesList";
import { loadRealEstateData } from "./utils/dataParser"; // Импорт вашей функции для загрузки данных
import { Pagination } from "@mui/material";
import FilterDropdown from "./components/FilterDropdown";
//const filters = ["Все", "Квартиры", "Дома", "Офисы"];

function App() {
  const [realEstateData, setRealEstateData] = useState<RealEstateObject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const objectsPerPage = 99;
  //const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data: RealEstateObject[] = await loadRealEstateData(); // Загружаем данные
      setRealEstateData(data); // Сохраняем данные в состоянии
    };

    fetchData(); // Вызываем загрузку данных при монтировании компонента
  }, []);

  // Определяем объекты для текущей страницы
  const indexOfLastObject = currentPage * objectsPerPage;
  const indexOfFirstObject = indexOfLastObject - objectsPerPage;
  const currentObjects = realEstateData.slice(
    indexOfFirstObject,
    indexOfLastObject
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const paginationComonent = (
    <Pagination
      count={Math.ceil(realEstateData.length / objectsPerPage)} // Количество страниц
      page={currentPage}
      onChange={handlePageChange}
      color="primary" // Цвет пагинации
      size="large" // Размер пагинации
      shape="rounded"
      variant="outlined"
      siblingCount={2}
      boundaryCount={2}
      sx={{ marginBottom: 2 }}
    />
  );

  return (
    <div>
      <Layout>
        <FilterDropdown
          label="Продаж/Аренда"
          currentObjects={realEstateData}
          defaultValue="Усі типи"
          type="type"
          subType=""
        />
        <FilterDropdown
          label="Категорії нерухомості"
          currentObjects={realEstateData}
          defaultValue="Усі Категорії"
          type="category"
          subType=""
        />
        <FilterDropdown
          label="Райони"
          currentObjects={realEstateData}
          defaultValue="Усі Райони"
          type="location"
          subType="sub-locality-name"
        />
        <FilterDropdown
          label="Комнат"
          currentObjects={realEstateData}
          defaultValue="Усі Комнат"
          type="rooms"
          subType=""
        />
        <FilterDropdown
          label="Агенти"
          currentObjects={realEstateData}
          defaultValue="Усі Агенти"
          type="sales-agent"
          subType="name"
        />
        {paginationComonent}
        <PropertiesList data={currentObjects}></PropertiesList>
        {paginationComonent}
      </Layout>
    </div>
  );
}

export default App;
