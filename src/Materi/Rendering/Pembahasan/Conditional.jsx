import React from "react";

export default class Conditional extends React.Component {
    //ini state utk contoh conditional kedua saja
    state = {
        isLoading: true
    }
    //ini akhir baris state conditional kedua

    render(){
        //ini contoh conditional kedua : baris Pertama
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000);

        return ( 
            <div>
                { this.state.isLoading 
                    ? <h1>Loading .....</h1>
                    : <h1>Selamat Datang di kelas MERN</h1> }
            </div>
        )

        // ini akhir baris dari conditional kedua


        //ini contoh conditional pertama : baris pertama
        // const isLogin = false;   
       
        // if(isLogin){
        //     return (
        //         <div>
        //             <h1>Anda sudah login</h1>
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             <h1>Silakan login terlebih dahulu</h1>
        //         </div>
        //     )
        // }

        // let message = ''
        // if(isLogin){
        //     message = 'Anda Sudah Login'
        // }else{
        //     message = 'Silakan login terlebih dahulu'
        // }

        // return(
        //     <div>
        //         <h1>{message}</h1>
        //     </div>
        // )
        
        // return(
        //     <div>
        //         {isLogin ? <h1>Anda Sudah Login</h1> : <h1>Silakan Login Terlebih dahulu</h1>}
        //     </div>
        // )

        //sampai sini baris terakhir conditonal



    }
}