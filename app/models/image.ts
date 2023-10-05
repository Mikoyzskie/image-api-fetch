interface UnsplashImage {
    description: string,
    location:{
        name: string,
    },
    user:{
        username: string,
    }
    urls:{
        raw:string,
    }
    width: number,
    height: number,
}