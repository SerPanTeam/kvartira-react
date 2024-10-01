import RealEstateObject from "../interfaces/RealEstateObject";
// Массив объектов недвижимости

// Интерфейс для обработки узлов XML
interface NodeProcessor {
  (node: Element, targetObject: RealEstateObject): void;
}

export async function loadRealEstateData() {
  try {
    const realEstateArray: RealEstateObject[] = [];
    const response = await fetch("/api/yandex_ua.xml");
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");

    const offers = xmlDoc.querySelectorAll("offer");

    // Заполняем массив объектами недвижимости
    offers.forEach((offer) => {
      let realEstateObject: RealEstateObject = {
        id: offer.getAttribute("internal-id")
          ? parseInt(offer.getAttribute("internal-id")!, 10)
          : 0,
        images: [],
      };
      // Получаем значение атрибута internal-id
      //   const internalId = offer.getAttribute("internal-id");
      //   realEstateObject["id"] = internalId; // Сохраняем ID в объекте

      // Обрабатываем каждый элемент <offer>
      processNode(offer, realEstateObject);

      // Обрабатываем теги <image> как массив картинок
      const images: string[] = [];
      offer.querySelectorAll("image").forEach((imageNode) => {
        if (imageNode.textContent) images.push(imageNode.textContent.trim());
      });
      realEstateObject["images"] = images; // Добавляем массив картинок в объект

      // Добавляем объект недвижимости в массив
      realEstateArray.push(realEstateObject);
    });

    // Для тестирования выводим массив в консоль
    console.log(realEstateArray);
    return realEstateArray;

    // После загрузки можно отобразить данные на странице
    //displayRealEstateData(realEstateArray);
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    return [];
  }
}

// Рекурсивная функция для обработки узлов (включая вложенные)
const processNode: NodeProcessor = (node, targetObject) => {
  node.childNodes.forEach((child) => {
    if (child.nodeType === 1) {
      const element = child as Element; // Приводим child к типу Element

      // Если это элемент (tag)
      const key = child.nodeName; // Имя тега

      // Если у этого элемента есть дочерние элементы
      if (child.childNodes.length > 1 && !["image"].includes(key)) {
        targetObject[key] = {}; // Создаем объект для вложенных тегов
        processNode(element, targetObject[key]); // Рекурсивно обрабатываем вложенные элементы
      } else {
        if (element.textContent) {
          const value = element.textContent.trim(); // Его значение
          targetObject[key] = value; // Добавляем в объект как ключ и значение
        }
      }
    }
  });
};
