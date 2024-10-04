// Интерфейс для объекта недвижимости
export default interface RealEstateObject {
    id: number; // ID может быть null, если атрибут отсутствует
    images: string[];
    [key: string]: any; // Для динамически добавляемых свойств
  } 