import React, { Component } from 'react'
import {StoryProvider, StoryConsumer} from './StoryContext'
import Page from '../../components/Containers/Page'
import UserStory from './UserStory'

export default class storyIndex extends Component {
    render() {
        return (
            <div>
                <StoryProvider>
                    <StoryConsumer>
                        {value => {
                            return <Page name='UserStory'>
                                <UserStory value={value}>
                                </UserStory>
                            </Page>
                        }}
                    </StoryConsumer>
                </StoryProvider>
            </div>
        )
    }
}
