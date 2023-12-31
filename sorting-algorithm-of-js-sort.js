// 647	EncodedJSValue JSC_HOST_CALL arrayProtoFuncSort(ExecState* exec)
// 648	{
// 649	    JSObject* thisObj = exec->hostThisValue().toObject(exec);
// 650	    unsigned length = thisObj->get(exec, exec->propertyNames().length).toUInt32(exec);
// 651	    if (!length || exec->hadException())
// 652	        return JSValue::encode(thisObj);
// 653
// 654	    JSValue function = exec->argument(0);
// 655	    CallData callData;
// 656	    CallType callType = getCallData(function, callData);
// 657
// 658	    if (thisObj->classInfo() == &JSArray::s_info && !asArray(thisObj)->hasSparseMap() && !shouldUseSlowPut(thisObj->structure()->indexingType())) {
// 659	        if (isNumericCompareFunction(exec, callType, callData))
// 660	            asArray(thisObj)->sortNumeric(exec, function, callType, callData);
// 661	        else if (callType != CallTypeNone)
// 662	            asArray(thisObj)->sort(exec, function, callType, callData);
// 663	        else
// 664	            asArray(thisObj)->sort(exec);
// 665	        return JSValue::encode(thisObj);
// 666	    }
// 667
// 668	    // "Min" sort. Not the fastest, but definitely less code than heapsort
// 669	    // or quicksort, and much less swapping than bubblesort/insertionsort.
// 670	    for (unsigned i = 0; i < length - 1; ++i) {
// 671	        JSValue iObj = getOrHole(thisObj, exec, i);
// 672	        if (exec->hadException())
// 673	            return JSValue::encode(jsUndefined());
// 674	        unsigned themin = i;
// 675	        JSValue minObj = iObj;
// 676	        for (unsigned j = i + 1; j < length; ++j) {
// 677	            JSValue jObj = getOrHole(thisObj, exec, j);
// 678	            if (exec->hadException())
// 679	                return JSValue::encode(jsUndefined());
// 680	            double compareResult;
// 681	            if (!jObj)
// 682	                compareResult = 1;
// 683	            else if (!minObj)
// 684	                compareResult = -1;
// 685	            else if (jObj.isUndefined())
// 686	                compareResult = 1; // don't check minObj because there's no need to differentiate == (0) from > (1)
// 687	            else if (minObj.isUndefined())
// 688	                compareResult = -1;
// 689	            else if (callType != CallTypeNone) {
// 690	                MarkedArgumentBuffer l;
// 691	                l.append(jObj);
// 692	                l.append(minObj);
// 693	                compareResult = call(exec, function, callType, callData, jsUndefined(), l).toNumber(exec);
// 694	            } else
// 695	                compareResult = codePointCompareLessThan(jObj.toWTFStringInline(exec), minObj.toWTFStringInline(exec)) ? -1 : 1;
// 696
// 697	            if (compareResult < 0) {
// 698	                themin = j;
// 699	                minObj = jObj;
// 700	            }
// 701	        }
// 702	        // Swap themin and i
// 703	        if (themin > i) {
// 704	            if (minObj) {
// 705	                thisObj->methodTable()->putByIndex(thisObj, exec, i, minObj, true);
// 706	                if (exec->hadException())
// 707	                    return JSValue::encode(jsUndefined());
// 708	            } else if (!thisObj->methodTable()->deletePropertyByIndex(thisObj, exec, i)) {
// 709	                throwTypeError(exec, "Unable to delete property.");
// 710	                return JSValue::encode(jsUndefined());
// 711	            }
// 712	            if (iObj) {
// 713	                thisObj->methodTable()->putByIndex(thisObj, exec, themin, iObj, true);
// 714	                if (exec->hadException())
// 715	                    return JSValue::encode(jsUndefined());
// 716	            } else if (!thisObj->methodTable()->deletePropertyByIndex(thisObj, exec, themin)) {
// 717	                throwTypeError(exec, "Unable to delete property.");
// 718	                return JSValue::encode(jsUndefined());
// 719	            }
// 720	        }
// 721	    }
// 722	    return JSValue::encode(thisObj);
// 723	}
