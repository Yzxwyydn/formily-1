import React from 'react'
import ReactDOM from 'react-dom'
import {
  SchemaForm,
  SchemaMarkupField as Field,
  createFormActions,
  FormSpy,
  LifeCycleTypes
} from '@formily/antd'
import { setup } from '@formily/antd-components'

setup() //内部会完全按照UForm注册规则将组件注册一遍

const actions = createFormActions()

const App = () => {
  return (
    <SchemaForm actions={actions}>
      <Field type="string" title="username" name="username" />
      <FormSpy
        selector={LifeCycleTypes.ON_FORM_VALUES_CHANGE}
        reducer={(state, action, form) => ({
          count: state.count ? state.count + 1 : 1
        })}
      >
        {({ state, type, form }) => {
          return <div>count: {state.count || 0}</div>
        }}
      </FormSpy>
    </SchemaForm>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
