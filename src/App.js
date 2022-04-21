import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {MainLayout} from "./layouts";
import {
    AboutPage,
    HomePage, LogInPage,
    PageNotFoundPage,
    PostsPage, SinglePostComments,
    SinglePostPage,
    SingleUserPage,
    SingleUserPosts,
    UsersPage
} from "./pages";
import {AuthProvider} from "./hoc";
import {RequireAuth} from "./hoc/RequireAuth";


const App = () => {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={
                    <RequireAuth>
                        <UsersPage/>
                    </RequireAuth>
                }>
                    <Route path={':id'} element={<SingleUserPage/>}>
                        <Route path={'posts'} element={<SingleUserPosts/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}>
                        <Route path={'comments'} element={<SinglePostComments/>}/>
                    </Route>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'/login'} element={<LogInPage/>}/>
                <Route path={'*'} element={<PageNotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
