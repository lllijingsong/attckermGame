import request from '@/api/service/request'

export function test() {
  return request({
    url: '/test111',
    method: 'get'
  })
}

export function getAttackPoker() {
  return request({
    url: '/getAttackPoker',
    method: 'get'
  })
}

export function getDefensivePoker() {
  return request({
    url: '/getDefensivePoker',
    method: 'get'
  })
}