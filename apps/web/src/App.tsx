import './App.css'

function App() {
  return (
    <>
      <h1>Web</h1>
      <button onClick={() => import('setting/App')}>setting</button>
      <button onClick={() => import('monitoring/App')}>monitornig</button>
    </>
  )
}
export default App
