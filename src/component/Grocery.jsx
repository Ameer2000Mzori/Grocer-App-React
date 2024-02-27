import React from 'react'

export const Grocery = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <h1>Grocery List</h1>
            <div>
              <input type="text" placeholder="add somet..." />
              <button>submit</button>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <input type="checkbox" />
                <p>Hallo world</p>
                <button>Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
