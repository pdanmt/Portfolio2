import { Flex, Text } from "@chakra-ui/react"
import { Title } from "../title"
import { Project } from "./project"
import axios from "axios"

export const revalidate = 3600

interface ResponseBody {
  id: number
  name: string
  description: string
  html_url: string
  full_name: string
  default_branch: string
  stargazers_count: number
}

interface ReposBody {
  id: number
  name: string
  description: string
  htmlUrl: string
  imgUrl: string
}

export async function Projects() {
  async function findCoverImage(baseUrl: string) {
    const imageExtensions = ['svg', 'jpg', 'jpeg', 'png']

    for (const extension of imageExtensions) {
      const url = `${baseUrl}/public/cover.${extension}`

      try {
        await axios.head(url)
        return url
      } catch (error) { }
    }
    return '/public/fallback-cover.png'
  }

  async function getRepos() {
    try {
      const res = await axios.get('https://api.github.com/users/pdanmt/repos')
      const data: ResponseBody[] = res.data

      const infosSortedByStars = data.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count
      }).slice(0, 6)

      const repoInfos = Promise.all(
        infosSortedByStars.map(async ({
          id,
          description,
          name,
          html_url,
          full_name,
          default_branch,
        }: ResponseBody) => {
          const branch = default_branch
          const fullName = full_name

          const rawBaseUrl = `https://raw.githubusercontent.com/${fullName}/${branch}/`
          const imgUrl = await findCoverImage(rawBaseUrl)

          return {
            id,
            description,
            name,
            htmlUrl: html_url,
            imgUrl
          } as ReposBody
        })
      )

      return repoInfos
    } catch (error) {
      console.error(`Erro ao buscar repositórios: ${error}`)
      return []
    }
  }

  const repos = await getRepos()

  return (
    <Flex minH='100vh' w='100%' bg='gray.500' p='2rem 0'>
      <Flex
        direction='column'
        w={['98%', '98%', '98%', '70%']}
        align='center'
        m='auto'
        gap='3rem'
      >
        <Title subtitle='Meu trabalho' title='Veja os projetos em destaque' />
        <Flex wrap='wrap' gap='1.5rem' justify='center'>
          {repos.length === 0 && (
            <Text
              color='gray.200'
              fontFamily='Maven Pro'
              fontSize='textMd'
              textAlign='center'
            >
              Não foi possível carregar os projetos. Tente recarregar a página!
            </Text>
          )}
          {repos.length !== 0 && repos.map(({
            id,
            description,
            name,
            htmlUrl,
            imgUrl
          }: ReposBody) => (
            <Project
              description={description}
              imgUrl={imgUrl}
              name={name}
              url={htmlUrl}
              key={id}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}