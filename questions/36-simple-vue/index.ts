// ThisType ---->>> 给对象字面量介入this

interface OptionDescriptor<D, C, M>{
  data: () => D & ThisType<D & C & M>
  computed: ThisType<D & C & M>
  methods: M & ThisType<D & C & M>
}


declare function SimpleVue<D = {}, C = {}, M = {}>(options: OptionDescriptor<D, C, M>): any

// (options: OptionDescriptor<D, C, M>): D & C & M {
//   const data = options.data()
//   const computed = options.computed
//   const methods = options.methods
//   return { ...data, ...computed, ...methods } as D & C & M
// }





type Data = {
  name: string
}

type Computed = {
  goodName: string
}

type Methods = {
  sayName: () => void
}


const instance = SimpleVue<Data, Computed, Methods>({
  data(){
    return {
      name: 'hello',
    }
  },
  computed: {
    goodName() {
      return this.name
    }
  },
  methods: {
    sayName(){
      this.name = 'say'
    }
  }
})