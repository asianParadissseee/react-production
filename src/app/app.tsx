import {classNames} from 'shared/lib/class-names/class-names'
import {useTheme} from 'app/providers/theme-provider'
import {AppRouter} from 'app/providers/routes'
import {Navbar} from 'widgets/navbar'
import {Sidebar} from 'widgets/sidebar'
import {Suspense, useEffect} from 'react'
import './styles/index.scss'

const App = () => {
    const {theme, toggleTheme} = useTheme()


    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
