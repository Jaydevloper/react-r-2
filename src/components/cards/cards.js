import Card from "../card/card";
const data = [
    {
        number:112,
        name:'Add tags for solutions',
        title:'Easier to search for solutions based on a specific stack.',
        link:'Enhancement',
        comment:2,
    },
    {
        number:99,
        name:'Add a dark theme option',
        title:'EIt would help people with light sensitivities and who prefer dark mode.',
        link:'Feature',
        comment:4,
    },
    {
        number:65,
        name:'Q&A within the challenge hubs',
        title:'Challenge-specific Q&A would make for easy reference.',
        link:'Enhancement',
        comment:1,
    },
    {
        number:51,
        name:'Allow image/video upload to feedback',
        title:'Images and screencasts can enhance comments on solutions.',
        link:'featuer',
        comment:2,
    },
    {
        number:42,
        name:'Ability to follow others',
        title:'Stay updated on comments and solutions other people post.',
        link:'Feature',
        comment:3,
    },
    {
        number:3,
        name:'Preview images not loading',
        title:'Challenge preview images are missing when you apply a filter.',
        link:'Bug',
        comment:0,
    },
    
]

function Cards(){
    return (
        [
            
            data.map(el => <Card Numb={el.number} Name={el.name} Title={el.title} Link={el.link} Comment={el.comment}></Card>)
        ]
    )
}
export default Cards;