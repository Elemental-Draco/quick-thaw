import { ref } from 'vue'

export function foodList() {
  const allFoods = ref([
    { name: 'Steak', par: 20, id: 1 },
    { name: 'Chicken Breast', par: 30, id: 2 },
    { name: 'Ground Beef', par: 25, id: 3 },
    { name: 'Salmon Fillet', par: 15, id: 4 },
    { name: 'Pork Chops', par: 20, id: 5 },
    { name: 'Shrimp (Raw)', par: 18, id: 6 },
    { name: 'Broccoli Florets', par: 12, id: 7 },
    { name: 'French Fries', par: 40, id: 8 },
    { name: 'Mozzarella Sticks', par: 22, id: 9 },
    { name: 'Burger Buns', par: 35, id: 10 },
  ])

  function removeFood(id) {
    allFoods.value = allFoods.value.filter((food) => food.id !== id)
  }

  function addFood(name, par) {
    // TODO account for empty array
    const listLength = allFoods.value.length
    allFoods.value.push({ name, par, id: allFoods.value[listLength - 1].id + 1 })
  }

  return { removeFood, addFood, foodList }
}
