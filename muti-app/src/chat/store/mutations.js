import data from '../api/data'

export default {

    ['GET_ALL'](state) {
        //获取当前所有消息
        state.allmessages = getAllMessages(state)

        //整理对话列表
        state.threads = cleanThreadData(state)
        state.currentThreadID = state.threads[0].tid

        //显示当前对话
        state.messages = cleanMessages(state, state.currentThreadID)
        console.log(state.threads)
    },

    ['CHANGE_THREAD'](state, tid) {
        state.currentThreadID = tid
        console.log(state.currentThreadID)

        //获取聊天数据
        state.messages = cleanMessages(state, tid)

    },

    ['ADD_MESSAGE'](state, data) {
        addMessage(state, data)
    }

}





//处理Thread
function cleanThreadData(state) {
    let threads = []
    let _data = state.allmessages

    _data.sort(function(a, b) {
        return b.timestamp - a.timestamp
    })

    _data.forEach(function(item) {
        if (threads.some(function(val, index) {
                return val.tid == item.threadID ? true : false
            })) {
            //
        } else {
            threads.push({
                tid: item.threadID,
                message: {
                    threadName: item.threadName,
                    timestamp: item.timestamp,
                    text: item.authorName + ' : ' + (
                        item.text.length > 40 ? item.text.substring(0, 40) + '...' : item.text)
                }
            })
        }
    });

    return threads
}


//所有message
function getAllMessages(state) {
    let messages = []
    data.forEach(function(item) {
        messages.push(item)
    })
    return messages
}


//处理Message
function cleanMessages(state, tid) {

    let messages = []
    let allmessages = state.allmessages
    allmessages.sort(function(a, b) {
        return a.timestamp - b.timestamp
    })
    allmessages.forEach(function(item) {
        if (item.threadID == tid) {
            messages.push(item)
        }
    })

    return messages

}



//添加数据
function addMessage(state, data) {
    let tid = data.t_id
    let text = data.text

    let thread = state.threads.find(function(val, index) {
        console.log(val.tid)
        return val.tid === tid ? true : false
    })

    // console.log(thread)

    let message = {
        id: 'm_' + Date.now(),
        threadID: tid,
        threadName: thread.message.threadName,
        authorName: 'Uercal',
        text: text,
        timestamp: Date.now()
    }

    state.allmessages.push(message)
    state.threads = cleanThreadData(state)
    state.messages = cleanMessages(state, state.currentThreadID)

}