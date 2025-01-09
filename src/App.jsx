import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoList from './pages/TodoList'
import HeaderLayout from './layouts/HeaderLayout'
import Json from './pages/Json'
import Chart from './pages/Chart'
import Formik from './pages/Formik'

function App () {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <HeaderLayout>
              <TodoList />
            </HeaderLayout>
          }
        />
        <Route
          path='/json'
          element={
            <HeaderLayout>
              < Json />
            </HeaderLayout>
          }
        />
        <Route
          path='/chart'
          element={
            <HeaderLayout>
              <Chart />
            </HeaderLayout>
          }
        />
        <Route
          path='/formik'
          element={
            <HeaderLayout>
              <Formik />
            </HeaderLayout>
          }
        />
      </Routes>
    </div>
  )
}

export default App
