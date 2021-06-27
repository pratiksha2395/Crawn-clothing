import {createSelector} from 'reselect'

const DirectorySelector = state =>  state.directory

export const selectDirectory = createSelector([DirectorySelector],
    state => state.sections)