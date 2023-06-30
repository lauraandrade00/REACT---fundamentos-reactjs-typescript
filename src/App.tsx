import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// author : {avatar_url: "", name: "", role: ""}
// piblishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lauraandrade00.png',
      name: 'Laura Andrade',
      role: 'Front End Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.' },
      { type: 'link', content: 'laura.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/paulorrrrr.png',
      name: 'Paulo Ricardo',
      role: 'Quality Assurance Professional',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa,' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.' },
      { type: 'link', content: 'paulo.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-06 20:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
