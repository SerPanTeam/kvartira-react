import { useEffect, useState, useRef } from "react";
import Layout from "./components/Layout";
import RealEstateObject from "./interfaces/RealEstateObject";
import PropertiesList from "./components/PropertiesList";
import { loadRealEstateData } from "./utils/dataParser";
import PaginationComponent from "./components/PaginationComponent";
import FiltersDropdown from "./components/FiltersDropdown";

function App() {
  const [realEstateData, setRealEstateData] = useState<RealEstateObject[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data: RealEstateObject[] = await loadRealEstateData(); // Загружаем данные
      setRealEstateData(data); // Сохраняем данные в состоянии
    };

    fetchData(); // Вызываем загрузку данных при монтировании компонента
  }, []);

  const topPaginationRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const objectsPerPage = 99;
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
    topPaginationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const paginationComponent = (
    <PaginationComponent
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      objectsPerPage={objectsPerPage}
      realEstateDataLength={realEstateData.length}
    />
  );

  //const [filtesArray, setfiltesArray] = useState({});


  return (
    <div>
      <Layout>
        <FiltersDropdown realEstateData={realEstateData} /* setfiltesArray={setfiltesArray} *//>
        <div ref={topPaginationRef}>{paginationComponent}</div>

        <PropertiesList data={currentObjects}></PropertiesList>

        {paginationComponent}
      </Layout>
    </div>
  );
}

export default App;
