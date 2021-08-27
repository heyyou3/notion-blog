import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>heyyouブログ</h1>
        <h2>NixOS, Vim, Go が好み。主に技術的なメモを残していきます。</h2>
      </div>
    </>
  )
}
