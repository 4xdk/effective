import { getUsersReq } from '../api/users';
import {
  getPursuancesReq,
  getPublicPursuancesReq,
  postPursuanceReq,
} from '../api/pursuances';
import {
  postTaskReq,
  postTaskToTaskListReq,
  getTasksReq,
  patchTaskReq,
  deleteTaskReq,
} from '../api/tasks';
import {
  postTaskListReq,
  getTaskListsReq,
  patchTaskListReq,
  deleteTaskListReq,
} from '../api/task_lists';
import {
  postMembershipReq,
  patchMembershipReq,
  getMembershipsReq,
  deleteMembershipReq,
} from '../api/memberships';

export const moveTaskInHierarchy = (oldParentGid, newParentGid, taskGid) => ({
  type: 'MOVE_TASK_IN_HIERARCHY',
  oldParentGid,
  newParentGid,
  taskGid
})

export const updateFormField = (formId, fieldId, value) => ({
  type: 'TASK_FIELD_UPDATE',
  formId,
  fieldId,
  value
});

export const clearTaskFormFields = (formId, isInTaskList = false) => ({
  type: 'TASK_FORM_CLEAR_FIELDS',
  formId,
  isInTaskList,
});

export const setTaskFormParentGid = (formId, newParentGid, oldParentGid) => ({
  type: 'TASK_FORM_SET_PARENT_GID',
  formId,
  newParentGid,
  oldParentGid
});

export const getUsers = () => ({ type: 'GET_USERS', payload: getUsersReq() });

export const getPursuancesByIds = pursuanceIds => ({
  type: 'GET_PURSUANCES_BY_IDS',
  payload: getPursuancesReq(pursuanceIds)
});

export const getPursuances = () => ({
  type: 'GET_PURSUANCES',
  payload: getPursuancesReq()
});

export const getPublicPursuances = () => ({
  type: 'GET_PUBLIC_PURSUANCES',
  payload: getPublicPursuancesReq()
});

export const getTasks = pursuanceId => ({
  type: 'GET_TASKS',
  payload: getTasksReq(pursuanceId)
});

export const postTask = task => {
  const taskCopy = { ...task };
  if (taskCopy.assigned_to === '') {
    /* Fixes 409 CONFLICT errors; '' is not a valid FK to the `users` table */
    delete taskCopy.assigned_to;
  }
  return {
    type: 'POST_TASK',
    payload: postTaskReq(taskCopy)
  }
}

export const postTaskToTaskList = (task, taskList) => {
  const taskCopy = { ...task };
  if (taskCopy.assigned_to === '') {
    /* Fixes 409 CONFLICT errors; '' is not a valid FK to the `users` table */
    delete taskCopy.assigned_to;
  }
  return {
    type: 'POST_TASK_TO_TASK_LIST',
    payload: postTaskToTaskListReq(taskCopy, taskList),
  }
}

export const deleteTask = task => ({
  type: 'DELETE_TASK',
  payload: deleteTaskReq(task)
});

export const startSuggestions = (value, filterSuggestion, list, formId) => ({
  type: 'START_SUGGESTIONS',
  suggestions: filterSuggestion(value, list),
  formId
});

export const showUsers = (users, suggestionForm) => ({
  type: 'SHOW_USERS',
  users,
  suggestionForm
});

export const stopSuggestions = () => ({ type: 'STOP_SUGGESTIONS' });

export const addSuggestion = (suggestion, suggestionForm) => ({
  type: 'ADD_SUGGESTION',
  suggestion,
  suggestionForm
});

export const upSuggestion = () => ({ type: 'UP_SUGGESTION' });

export const downSuggestion = () => ({ type: 'DOWN_SUGGESTION' });

export const setCurrentPursuance = currentPursuanceId => ({
  type: 'SET_CURRENT_PURSUANCE',
  currentPursuanceId
});

export const unsetCurrentPursuance = () => ({
  type: 'UNSET_CURRENT_PURSUANCE'
});

export const addPostedRootTaskToHierarchy = task => ({
  type: 'ADD_POSTED_ROOT_TASK',
  task
});

export const addPostedSubTaskToHierarchy = task => ({
  type: 'ADD_POSTED_SUB_TASK',
  task
});

export const addTaskFormToHierarchy = (parentTaskGid, taskFormId) => ({
  type: 'TASK_FORM_ADD_TO_HIERARCHY',
  parentTaskGid,
  taskFormId
});

export const removeTaskFormFromHierarchy = (parentTaskGid, taskFormId) => ({
  type: 'TASK_FORM_REMOVE_FROM_HIERARCHY',
  parentTaskGid,
  taskFormId
});

export const setMicroTaskNotification = ({ id, content, userAction }) => ({
  type: 'SET_NOTIFICATION',
  id,
  notificationType: 'MICRO_TASK',
  content,
  userAction
});

export const setAppreciationNotification = ({ id, content, userAction }) => ({
  type: 'SET_NOTIFICATION',
  id,
  notificationType: 'APPRECIATION',
  content,
  userAction
});

export const setMentionNotification = ({ id, content, userAction }) => ({
  type: 'SET_NOTIFICATION',
  id,
  notificationType: 'MENTION',
  content,
  userAction
});

export const setHelpWantedNotification = ({ id, content, userAction }) => ({
  type: 'SET_NOTIFICATION',
  id,
  notificationType: 'HELP_WANTED',
  content,
  userAction
});

export const setProgressNotification = ({ id, content, userAction }) => ({
  type: 'SET_NOTIFICATION',
  id,
  notificationType: 'PROGRESS',
  content,
  userAction
});

export const removeNotification = id => ({ type: 'REMOVE_NOTIFICATION', id });

export const addContributionPoints = amount => ({
  type: 'ADD_CONTRIBUTION_POINTS',
  amount
});

export const toggleSettingsInfoModal = () => ({
  type: 'TOGGLE_SETTINGS_INFO_MODAL'
});

export const toggleRoleInfoModal = () => ({
  type: 'TOGGLE_ROLE_INFO_MODAL'
});

export const updatePursuanceFormField = (fieldId, value) => ({
  type: 'UPDATE_CREATE_PURSUANCE_FORM',
  fieldId,
  value
});

export const postPursuance = pursuance => ({
  type: 'POST_PURSUANCE',
  payload: postPursuanceReq(pursuance)
});

export const clearPursuanceFormFields = () => ({
  type: 'PURSUANCE_FORM_CLEAR_FIELDS'
});

export const patchTask = task => ({
  type: 'PATCH_TASK',
  payload: patchTaskReq(task)
});

export const archiveTask = task => ({
  type: 'TASK_ARCHIVE',
  payload: patchTaskReq({ ...task, is_archived: true })
});

export const setTaskAssignee = task => ({
  type: 'TASK_SET_ASSIGNEE',
  payload: patchTaskReq(task)
});

export const removeSuccessToast = () => ({
  type: 'REMOVE_SUCCESS_TOAST'
});

export const rpShowTaskDetails = ({ taskGid, show = true }) => ({
  type: 'RIGHT_PANEL_SHOW_TASK_DETAILS',
  taskGid,
  show
});

export const rpShowTaskList = ({ show = true }) => ({
  type: 'RIGHT_PANEL_TOGGLE_SHOW_TASK_LIST',
  show: show
});

export const rpUpdateTaskListFilter = taskListFilter => ({
  type: 'RIGHT_PANEL_TASK_LIST_FILTER_UPDATE',
  taskListFilter
});

export const toggleRightPanel = () => ({
  type: 'RIGHT_PANEL_TOGGLE'
});

export const rpShowTaskDetailsOrCollapse = ({ taskGid }) => ({
  type: 'RIGHT_PANEL_SHOW_TASK_DETAILS_OR_COLLAPSE',
  taskGid
});

export const userLoginSuccess = ({ username }) => ({
  type: 'USER_LOGIN_SUCCESS',
  username
});

export const userLogoutSuccess = () => ({
  type: 'USER_LOGOUT_SUCCESS'
});

export const getInvites = ({ pursuanceId }) => ({
  type: 'GET_INVITES',
  pursuanceId,
});

export const postMembership = membership => ({
  type: 'POST_MEMBERSHIP',
  payload: postMembershipReq(membership),
});

export const getMemberships = filterOption => ({
  type: 'GET_MEMBERSHIPS',
  payload: getMembershipsReq(filterOption),
});

export const deleteMembership = membership => ({
  type: 'DELETE_MEMBERSHIP',
  payload: deleteMembershipReq(membership),
});

export const setMembershipPermissionsLevel = membership => ({
  type: 'MEMBERSHIP_SET_PERMISSIONS_LEVEL',
  payload: patchMembershipReq(membership),
});

// TaskLists
export const getTaskLists = (pursuanceId, filterOptions) => ({
  type: 'GET_TASK_LISTS',
  payload: getTaskListsReq(pursuanceId, filterOptions),
});

export const postTaskList = taskList => {
  const taskListCopy = { ...taskList };
  if (taskListCopy.assigned_to === '') {
    /* Fixes 409 CONFLICT errors; '' is not a valid FK to the `users` table */
    delete taskListCopy.assigned_to;
  }
  return {
    type: 'POST_TASK_LIST',
    payload: postTaskListReq(taskListCopy),
  }
}

export const deleteTaskList = taskList => ({
  type: 'DELETE_TASK_LIST',
  payload: deleteTaskListReq(taskList)
});

export const addPostedRootTaskListToHierarchy = taskList => ({
  type: 'ADD_POSTED_ROOT_TASK_LIST',
  taskList,
});

export const addPostedSubTaskListToHierarchy = taskList => ({
  type: 'ADD_POSTED_SUB_TASK_LIST',
  taskList,
});

export const addTaskListFormUnderParent = (parentTaskListId, taskListFormId) => ({
  type: 'TASK_LIST_FORM_ADD_UNDER_PARENT',
  parentTaskListId,
  taskListFormId,
});

export const removeTaskListFormFromUnderParent = (parentTaskListId, taskListFormId) => ({
  type: 'TASK_LIST_FORM_REMOVE_FROM_UNDER_PARENT',
  parentTaskListId,
  taskListFormId,
});

export const addTaskFormToEndOfTaskList = (parentTaskListId, taskFormId) => ({
  type: 'TASK_LIST_ADD_TASK_FORM_END',
  parentTaskListId,
  taskFormId,
});

export const removeTaskFormFromEndOfTaskList = (parentTaskListId, taskListFormId) => ({
  type: 'TASK_LIST_REMOVE_TASK_FORM_END',
  parentTaskListId,
  taskListFormId,
});

export const patchTaskList = taskList => ({
  type: 'PATCH_TASK_LIST',
  payload: patchTaskListReq(taskList),
});

export const archiveTaskList = taskList => ({
  type: 'TASK_LIST_ARCHIVE',
  payload: patchTaskListReq({ ...taskList, is_archived: true }),
});

export const setTaskListAssignee = taskList => ({
  type: 'TASK_LIST_SET_ASSIGNEE',
  payload: patchTaskListReq(taskList),
});

export const setTaskCelebrated = taskGid => ({
  type: 'PATCH_TASK_CELEBRATED',
  taskGid,
});
