export default function BlogLayoutRightSideBar({title, children}) {
    return <div className="container">
          <div >
              sidebar
          </div>
          <div>
              main content
          </div>
          <style jsx>
            {`
              .container{
                display: flex;
                flex-direction: row;
              }
              
              `}
          </style>
      </div>
}
  