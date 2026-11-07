const title = 'My Component'
const welcome = {
  greeting: 'Hey',
  title: 'React'
}

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>Hello {getTitle('My React App')}!</h1>
      <h2>{welcome.greeting} {welcome.title}</h2>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

export default App;
