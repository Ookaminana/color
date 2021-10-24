import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from '../../config'
import { FormPage } from '../pages/FormPage'
import { PalettePage } from '../pages/PalettePage'

import styles from './App.module.scss'

const App = () => {

    return (
        <div className={styles.app}>
            <Router>
                <Switch>
                    <Route path={routes.form} exact>
                        <FormPage />
                    </Route>
                    <Route path={routes.palette} exact>
                        <PalettePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App