import ReactReconciler from 'react-reconciler';

const reconciler = ReactReconciler({
  /* configuration for how to talk to the host env */
  /* aka "host config" */

  supportsMutation: true,

  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle,
  ) {
    const el = document.createElement(type);

    if(props.className) {
      el.className = props.className;
    }

    if(props.src) {
      el.src = props.src;
    }

    ['alt', 'className', 'href', 'rel', 'src', 'target']
      .forEach(prop => {
        if(props[prop]) {
          el[prop] = props[prop];
        }
      })

    // console.log(type, props);

    if(props.onClick) {
      el.addEventListener('click', props.onClick);
    }

    if(props.bgColor) {
      el.style.backgroundColor = props.bgColor;
    }

    return el;
  },
  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle,
  ) {
    return document.createTextNode(text);
  },
  appendChildToContainer(container, child) {
    container.appendChild(child);
  },
  appendChild(parent, child) {
    parent.appendChild(child);
  },
  appendInitialChild(parent, child) {
    parent.appendChild(child);
  },

  removeChildFromContainer(container, child) {
    container.removeChild(child);
  },
  removeChild(parent, child) {
    parent.removeChild(child);
  },
  insertInContainerBefore(container, child, before) {
    container.insertBefore(child, before);
  },
  insertBefore(parent, child, before) {
    parent.insertBefore(child, before);
  },

  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    currentHostContext,
  ) {
    let payload;

    if (oldProps.bgColor !== newProps.bgColor) {
      payload = {
        newBgColor: newProps.bgColor
      };
    }
    return payload;
  },
  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork,
  ) {
    if (updatePayload.newBgColor) {
      instance.style.backgroundColor = updatePayload.newBgColor;
    }
  },

  getRootHostContext() {},
  getChildHostContext() {},
  shouldSetTextContent() {},
  prepareForCommit() {},
  resetAfterCommit() {},
  finalizeInitialChildren() {},
});

const ReactDOMMini = {
  render(whatToRender, div) {
    const container = reconciler.createContainer(div, false, false);

    reconciler.updateContainer(whatToRender, container, null, null);

  },
};

export default ReactDOMMini;

