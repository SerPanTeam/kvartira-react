import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import RealEstateObject from "./interfaces/RealEstateObject";
import PropertiesList from "./components/PropertiesList/PropertiesList";
import { loadRealEstateData } from "./utils/dataParser"; // Импорт вашей функции для загрузки данных

function App() {
  //const [count, setCount] = useState(0);

  const [realEstateData, setRealEstateData] = useState<RealEstateObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: RealEstateObject[] = await loadRealEstateData(); // Загружаем данные
      setRealEstateData(data); // Сохраняем данные в состоянии
    };

    fetchData(); // Вызываем загрузку данных при монтировании компонента
  }, []);

  return (
    <div>
      <Layout>
        <PropertiesList data={realEstateData}></PropertiesList>
      </Layout>
    </div>
  );
}

export default App;
