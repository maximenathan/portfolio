import { useStaticQuery, graphql } from 'gatsby'
import { pathOr } from 'ramda'

interface Data {
  GlobalJson: {
    title: string
  }
}

const TITLE = graphql`
  query GlobalTitleQuery {
    dataJson {
      title
    }
  }
`

const useHeaderTitle = (): string => {
  const titleData: Data = useStaticQuery(TITLE)

  return pathOr('', ['dataJson', 'title'], titleData)
}
export default useHeaderTitle
