import Recipe from './Recipe'
import './App.css';
import React,{useState, useEffect} from 'react'

function App() {

  const APP_ID = '49568502';
  const APP_KEY = 'f6ad0cb43b7a4962add78d5a301e6b90';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  },[query]) //``submit押した時にようやくeffect

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json(); //fetch 使うときはawait
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value); //inputのなかで書かれたものに更新される
  }

  const getSearch = e => {  //ボタンが押された時だけ更新されて欲しい
    e.preventDefault();
    setQuery(search)　　//全部書き終わって、ボタンを押すところまで
    setSearch('') ;//buttonの中身リセット

  }




  return (
    <div className="App">
      <form　onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit" >search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe => (  //mapの第一引数は、recipesの中身１つ１つのこと。
        <Recipe 
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
     

    </div>
  );
}

export default App;
