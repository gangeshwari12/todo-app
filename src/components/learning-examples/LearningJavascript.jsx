const person = {
    name: 'Graham Ray',
    address: {
        line1: '123 Makla Blvd',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
    },
    profiles: ['twitter', 'linkedin','instagram'],
    printProfile: () => {
       person.profiles.map(
        profile => console.log(profile)
       )
    }
    
}

export default function LearningJavascript() {
    return (
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.address.city}</div>
        <div>{person.profiles[0]}</div>
        <div>{ person.printProfile() }</div>
        </>
    )
}