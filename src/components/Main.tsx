import React from 'react'
import {sections, skills, education, projects} from '../content.json'
import '../styles/Main.scss'
import '../styles/Section.scss'
import {Card} from './Card'

const examples = [
`const arrayDiff = (a, b) => a.filter(v => !b.some(n => v === n))`,
`const letters = {10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'}

const rgb = (...n) => {
    return n.map(v => {
        if (v > 255) v = 255
        else if (v < 0) v = 0

        return [
            (Math.trunc(v / 16) < 10) 
                ? Math.trunc(v / 16) 
                : letters[Math.trunc(v / 16)],
            (v % 16 < 10) ? v % 16 : letters[v % 16]
        ].join('')
    }).join('')
}`
]

export const Main: React.FC = () => {
    return (
        <main className='Main'>
            <article className='Main__article'>
                <section id={sections[0]} className='Section'>
                    <h3>{sections[0]}</h3>
                    <p>
                        I am going to become a javascript frontend developer. I have a high learning ability,
                        perseverance and desire to develop in this area.
                    </p>
                    <p>
                        I enjoy creating mobile apps, playing sports and learning new things. Since childhood,
                        I had a predisposition to work with electronics and computers. I love to disassemble,
                        assemble and configure something...
                    </p>
                </section>
                <section id={sections[2]} className='Section'>
                    <h3>{sections[2]}</h3>
                    <p>Example of function, which subtracts one list from another and returns the result:</p>
                    <pre><code className="language-javascript">{examples[0]}</code></pre>
                    <p>Function to convert RGB to HEX:</p>
                    <pre><code className="language-javascript">{examples[1]}</code></pre>
                </section>
                <section id={sections[3]} className='Section'>
                    <h3>{sections[3]}</h3>
                    {projects.map(p => <Card
                        title={p.title}
                        href={p.href}
                        desc={p.desc}
                        technologies={p.technologies}
                        date={p.date}
                        key={p.href}
                    /> )}
                </section>
            </article>
            <aside className='Main__aside'>
                <section id={sections[1]} className='Section'>
                    <h3>{sections[1]}</h3>
                    <ul className='ul'>
                        {skills.map(skill => <li key={skill}>{skill}</li> )}
                    </ul>
                </section>
                <section id={sections[4]} className='Section'>
                    <h3>{sections[4]}</h3>
                    <ul className='ul'>
                        {education.map(item => <li key={item}>{item}</li> )}
                    </ul>
                </section>
                <section id={sections[5]} className='Section'>
                    <h3>{sections[5]}</h3>
                    <p>My english knowledge level is A2 (Pre-Intermediate).</p>
                </section>
            </aside>
        </main>
    )
}