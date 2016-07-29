describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect(mergeSort([]) ).toEqual( [] );
  });

  it('leaves sorted array alone', function(){
    expect(mergeSort([1, 2, 3])).toEqual([1,2,3]);
  });

  it('sorts unsorted array', function(){
    var giantArray = [4, 2, 5, 6, 2, 1, 3,8,122,5,64,3];
    expect(mergeSort(giantArray)).toEqual([ 1, 2, 2, 3, 3, 4, 5, 5, 6, 8, 64, 122 ]);
  })
});
