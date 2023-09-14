import {classNames} from "shared/lib/class-names/class-names";
import {useTheme} from "app/providers/theme-provider";
import {AppRouter} from "app/providers/routes";
import {Navbar} from "widgets/navbar";
import "./styles/index.scss"


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;
