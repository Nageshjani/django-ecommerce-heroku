def search(nums, target):
        
        left=0
        right=len(nums)-1

        while left<=right:
            m=(left+right)//2
            if  nums[m]==target:
                return m
            
            else:
                #suppose left sorted array
                
                if nums[m]>nums[left]:
                    print(m,'left sorted')
                    # and suppose target is left sorted side
                    if target >=nums[left] and target < nums[m]:
                        right=m-1
                    else:
                        left=m+1
                #suppose right side is sorted:
                if nums[m]<nums[right]:
                    print(m,'right sorted')
                    #and tragre isin right sorted side
                    if target>nums[m] and target <nums[right]:
                        left=m+1
                    else:
                        right=m-1
        return -1
                
                
ret=search([4,5,6,7,0,1,2],0)
print(ret)

