import image from './assets/image.png'
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks'

export const model = [
    new TitleBlock(
        'JS Վեբ Կոնստրուկտոր',
        {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to bottom, #ff0099, #681bb8)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center',
                'margin-right': '0'
            }
        }),
    new ImageBlock(
        image,
        {
            styles: {
                padding: '1.3rem 0',
                display: 'flex',
                'justify-content': 'center',
                'margin-right': '0',
                background: 'linear-gradient(to bottom, #681bb8, #8e2de2)'
            },
            imageStyles: {
                width: '500px',
                height: 'auto',
                'border-radius': '15px'
            },
            alt: 'Սա նկար է'
        }
    ),
    new ColumnsBlock(
        [
            'Այս տեքստը գալիս է model.js ֆայլից։',
            'Այս կայքը հավաքված է ամբողջությամբ նատիվ JS-ով։',
            'Ես չգիտեմ, թե ինչ կարելի է գրել այստեղ։',
        ],
        {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold',
                'margin-right': '0'
            }
        }
    ),
    new TextBlock(
        'Այստեղ տեքստ է, որը ասում է, որ այս կայքը պատրաստված է ամբողջությամբ նատիվ JS-ով՝ Նարեկի կողմից։',
        {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                'margin-right': '0',
                'text-align': 'center',
                'padding-top': '5px'
            }
        }
    )
    
]