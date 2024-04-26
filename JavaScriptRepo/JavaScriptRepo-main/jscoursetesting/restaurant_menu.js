const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $15', 'Oatmeal -$22.99', 'Frittata -$24.99'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

//const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>').Join();
//const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => '<p>Item ${index + 1}: ${item}</p>').join('');
//document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

//const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// let mainCourseItem = '';
// mainCourseMenu.forEach((item, index) => {
// mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
// document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let mainCourseItem ='';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;


// let dessertItem = '';
// for (let i = 0; i < dessertMenu.length; i++) {
//     dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
// document.getElementById('dessertMenuItems').innerHTML = dessertItem;

let dessertItem = '';
for(i=0; i< dessertMenu.length; i++)
{
    dessertItem += `<p>Item ${i +1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;