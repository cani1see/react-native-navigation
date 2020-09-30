#import "RNNOptions.h"
#import "RNNScreenTransition.h"
#import "TransitionOptions.h"

@interface RNNAnimationsOptions : RNNOptions

@property (nonatomic, strong) RNNScreenTransition* push;
@property (nonatomic, strong) RNNScreenTransition* pop;
@property (nonatomic, strong) RNNScreenTransition* showModal;
@property (nonatomic, strong) RNNScreenTransition* dismissModal;
@property (nonatomic, strong) RNNScreenTransition* setStackRoot; // <-- TODO: Shouldn't that be TransitionOptions* ?
@property (nonatomic, strong) TransitionOptions* setRoot;

@end
