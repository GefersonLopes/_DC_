// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}


export const videos = [
  {
    id: 1,
    img: "https://feira.tangerina.news/wp-content/uploads/2022/12/avatar-2-foto-agua-divulgacao-fox.jpg",
    title: "VIDA DE AVATAR",
    auth: "Thiago Romariz",
    desc: "20 mil vizualizações . há 4 dias",
    category: "Avatar",
    new: true,
  },
  {
    id: 2,
    img: "https://th.bing.com/th/id/OIP.FMYAmy59nBSb-Z88q3-yWgHaFL?pid=ImgDet&rs=1",
    title: "PEIXE DORA",
    auth: "Procurando Nemo",
    desc: "4 mil vizualizações . há 4 dias",
    category: "Animais",
  },
  {
    id: 3,
    img: "https://th.bing.com/th?id=OIF.M9VUuyX%2bx7JSUs%2bKaBHNJA&pid=ImgDet&rs=1",
    title: "MELHORES MOMENTOS MESSI",
    auth: "EI Sports",
    desc: "7 mi vizualizações . há 4 dias",
    category: "Futebol",
    new: true,
  },
  {
    id: 4,
    img: "https://img.quizur.com/f/img5fa0ecae522403.27798668.jpg?lastEdited=1604381871",
    title: "PLAYLIST ALOK",
    auth: "Music TV",
    desc: "24 mil vizualizações . há 4 dias",
    category: "Músicas",
  },
  {
    id: 5,
    img: "https://focoefama.com/wp-content/uploads/2022/07/38106_12-fatos-que-voce-nao-sabia-sobre-avatar_20-06-2022-768x432.jpg",
    title: "TRAILER AVATAR 2",
    auth: "Trailers official",
    desc: "417 mil vizualizações . há 4 dias",
    category: "Avatar",
    new: true,
  },
  {
    id: 6,
    img: "https://th.bing.com/th/id/OIP.0hYlzBjrr1HZNmh8T6FheQHaFS?pid=ImgDet&rs=1",
    title: "VIDA DE LOBO",
    auth: "Geferson Lopes",
    desc: "1,2 mi vizualizações . há 4 dias",
    category: "Animais",
  },
];