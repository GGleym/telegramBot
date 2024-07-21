/**
 * Добавление/удаление значения массива в зависимости от его наличия в нем
 *
 * @param collection - Целевой массив
 * @param item - Элемент для добавления/удаления
 * @returns collection - Обновленная коллекция
 */
export const toggleArrayElement = <Entity extends string>(collection: Entity[], item: Entity) => {
  if (collection.includes(item)) {
    return collection.filter((collectionItem) => collectionItem !== item)
  }

  return [...collection, item]
}
