export const userColumns =[{ field: 'id', headerName: 'ID', width: 70 },{
    field:"user",headerName: "User", width:230, renderCell: (params)=>{
        return(
            <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="img"/> 
            {params.row.username}
            </div>
        )
    }
},
{
    field:"email", headerName:"Email", width:230,
},
{
    field:"age", headerName:"Age", width:100,
},
{
    field:"status", headerName:"Status", width:160, renderCell: (params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
},
]

//temporary data
export const userRows = [
    {
        id: 1,
        username: "ifeoluwa",
        img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg",
        status: "active",
        email: "ifeoluwa@gmail.com",
        age: 15,
    },
    {
        id: 2,
        username: "ife",
        img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg",
        status: "passive",
        email: "oladeniifeoluwa@gmail.com",
        age: 20,
    },
    {
        id: 3,
        username: "ore",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000",
        status: "pending",
        email: "oladeni@gmail.com",
        age: 15,
    },
    {
        id: 4,
        username: "idapo",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000",
        status: "active",
        email: "oladeniifeoluwa1@gmail.com",
        age: 31,
    },
    {
        id: 5,
        username: "esther",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000",
        status: "pending",
        email: "oladeniifeoluwa12@gmail.com",
        age: 15,
    },
    {
        id: 6,
        username: "sola",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000",
        status: "passive",
        email: "oladeniifeoluwa123@gmail.com",
        age: 19,
    },
    {
        id: 7,
        username: "obafemi",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000",
        status: "active",
        email: "oladeniifeoluwa1234@gmail.com",
        age: 15,
    },
    {
        id: 8,
        username: "",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000",
        status: "pending",
        email: "oladeniifeoluwa12345@gmail.com",
        age: 22,
    },
]