function myClone(target, map = new Map()){ //Map 方法处理深拷贝 // weakMap 可以使用, 弱引用对象,可回收释放内存  减少消耗
  if(typeof target === 'object'){
    let cloneTarget = Array.isArray(target) ? [] : {}
    // 防止循环引用
    if(map.get(target)){
      return map.get(target)
    }
    map.set(target, cloneTarget)

    for(const key in target){
      cloneTarget[key] = myClone(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }
}

function getHistory(){ // 获取时间差  参数不固定  返回 YYYY-MM-DD
  
}
