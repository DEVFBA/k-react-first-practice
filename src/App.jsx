import './App.css';
import MainHeader from './components/MainHeader';
import SecondHeader from './components/SecondHeader';
import Button from './components/Button';
import Card from './components/Card';

const App = () => {

  return (

    <>
      <div className='main-section'>
        <section>
          <MainHeader text='Vite'/>
          <MainHeader text='Next Generation'/>
          <MainHeader text='Frontend Tooling'/>
          <SecondHeader text='Get ready for a development environment that can finally catch up with you'/>
          <div className='buttons-row'>
            <Button className='button' text='Get Started'/>
            <Button className='button' text='Why Vite?'/>
            <Button className='button' text='View on GitHub'/>
            <Button className='button' text='ViewConf 23!'/>
          </div>
        </section>
        <section>
          <img src="https://vitejs.dev/logo-with-shadow.png" alt="" />
        </section>
      </div>
      
      <div>
        <section  className='cards-container'>
          <Card emoji='💡' title ='Instant Server Start' text='On demand file serving over native ESM, no bundling required!'/>
          <Card emoji='🛶' title ='Lightning Fast HMR' text='Hot Module Replacement (HMR) that stays fast regardless of app size.'/>
          <Card emoji='🎪' title ='Rich Features' text='Out-of-the-box support for TypeScript, JSX, CSS and more.'/>
        </section>

        <section  className='cards-container'>
          <Card emoji='🎩' title ='Optimized Build' text='Pre-configured Rollup build with multi-page and library mode support.'/>
          <Card emoji='🎎' title ='Universal Plugins' text='Rollup-superset plugin interface shared between dev and build.'/>
          <Card emoji='🎃' title ='Fully Typed APIs' text='Flexible programmatic APIs with full TypeScript typing.'/>
        </section>
      </div>
    </>
  )


}

export default App;
