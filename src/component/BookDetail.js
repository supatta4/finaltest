import React from 'react'

const BookDetail = ({id,search}) => {

  return (
    <>
      <div className="container">
        <div className="row">
          {id
          .filter(id => id.title.includes(search))
          .slice(0,20)
          .map((datail) => (
            <>
            <br></br>
            <div className="col-3">   
              <div className="card">
              <img src={datail.thumbnailUrl} className="card-img" alt={datail.thumbnailUrl} />
                <div className="card-body">
                  <div className="card-title">{datail.title}</div>
                  <p className="card-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{datail.shortDescription}</p>
                </div>
              </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default BookDetail;