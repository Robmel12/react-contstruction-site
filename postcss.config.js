if(process.env.NODE_ENV === 'production'){
const config ={
    plugins:
    {
        'postcss-import': {},
        tailwindcss: {},
        autoprefixer: {},
    }
    }
    module.exports = config
}else{
    const config ={
        plugins:
        {
            'postcss-import': {},
            tailwindcss: {},
            autoprefixer: {},
        }
        }
module.exports = config
}