
// fc51352d8e1042da8cafdc397b83f5ea

const base_url ="https://api.rawg.io/api";

const getCurrentMonth =() =>{
    const month = new Date().getMonth() + 1;
    if (month < 10){
        return`0${month}`
    } else {
        return month;
    }
    console.log(month)
}

const getCurrentDay =() =>{
    const day = new Date().getDate() ;
    if (day < 10){
        return`0${day}`
    } else {
        return day;
    }
    console.log(day)
}

const currentYear=new Date().getFullYear()
const currentMonth =getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear- 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

console.log(currentDate)
console.log(lastYear)
console.log(nextYear)




getCurrentMonth();


//popoular games
const popular_games = `${base_url}/games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `${base_url}/games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `${base_url}/games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`


export const popularGamesURL=()=> `${popular_games}`
export const upcomingGamesURL=()=> `${upcoming_games}`
export const newGamesURL=()=> `${new_games}`

//Game details
export const gameDetailsURL = (game_id) => `${base_url}/games/${game_id}`
//Game Screenshots
export const gameScreenshotURL = (game_id) => `${base_url}/games/${game_id}/screenshots`
//Search game
export const searchGameURL = (game_name) =>  `${base_url}/games?search=${game_name}&page_size=9`