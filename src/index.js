import Launcher from '@morax/shield'
import guid from '@morax/shield-guid'
import sentry from '@morax/shield-sentry'
import routes from './routes.config'

if (module && module.hot) {
    module.hot.accept()
}

const app = new Launcher({
    routes
})

app.use(guid)
app.use(sentry)

app.start({
    perf: true
})

